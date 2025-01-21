https://www.youtube.com/watch?v=ftohATkHBi0&ab_channel=Payload


## MongoDB

- Create project:
  https://cloud.mongodb.com/v2#/org/6761791a70bad86808f5016c/projects => New project / Next / Create project
  => Create cluster (no necessary change in options) - This creates the DB
  => Create Database user
  => Choose a connection method

=========> Drivers => Copy connection string to use in app
mongodb+srv://&&&&database_user&&&&:&&&&password_generated&&&&@cluster0.3xz7h.mongodb.net/&&&&database_name&&&&?retryWrites=true&w=majority&appName=Cluster0
and replace values between &&&& accordingly

- Manage DB access - Create a custom role:
  => Custom roles => Add new custom role
  => Select Actions and Roles (Database Actions and Roles w/ Actions & Built-in roles)
  => Database (enter a database name)

      - Assign a custom role to a specific database:

  => Database users => Add New DB user
  => Password authentication
  => Autogenerate a secure password
  => Custom roles => Add custom roles => Select role (among existing in list)

=========> This user has now only access to this specific DB

Delete if necessary the admin user

Manage network access
=> Network access => Add IP Address => Allow access from anywhere => Confirm
=> Delete DB automatically created

## Create a Payload project

pnpx create-payload-app@latest

project_name / blank / connection to database string / db_url

Launch project : pnpm dev

## Create a collection

In payload.config.ts:

collections: [
Users,
Media,
Manufacturers,
etc.
]

Re-generate types:
npx payload generate:types

## Set a bi-directional relation between two collections

In /collections/Cars.ts (ManyToOne):

import type { CollectionConfig } from 'payload'

export const Cars: CollectionConfig = {
slug: 'cars',
admin: {
useAsTitle: 'title',
},
fields: [
{
name: 'title',
type: 'text',
},
{
name: 'featuredImage',
type: 'upload', // type upload needs to be related to a collection
relationTo: 'media',
},
{
name: 'manufacturer',
type: 'relationship', // type relationship upload needs to be related to a collection
relationTo: 'manufacturers',
},
],
}

In /collections/Manufacturers.ts (OneToMany):

import type { CollectionConfig } from 'payload'

export const Manufacturers: CollectionConfig = {
slug: 'manufacturers',
admin: {
useAsTitle: 'title',
},
fields: [
{
name: 'title',
type: 'text',
},
{
name: 'logo',
type: 'upload', // type upload needs to be related to a collection
relationTo: 'media',
},
{
name: 'cars',
type: 'join', // implements a bi-directional relation to a collection
on: 'manufacturer',
collection: 'cars',
},
],
}

## Set thumbnails and banner formats for Media

In /collections/Media.ts:

...
upload: {
adminThumbnail: 'thumbnail',
imageSizes: [
{
name: 'thumbnail',
width: 300,
height: 300,
},
{
name: 'banner',
width: 1024,
height: 640,
},
],
},
...

## Set Pages collections with possibility for user to see them if logged in

In /collections/Pages.ts:

import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
slug: 'pages',
admin: {
useAsTitle: 'title',
},
access: {
read: ({ req: { user } }) => {
// Logged in users can read everything
if (user) return true

      // If not logged in, you can only read published pages
      // This is called a "query constraint" - very powerful !

      return {
        _status: {
          equals: 'published',
        },
      }
    },

},
versions: {
drafts: {
autosave: true,
},
},
fields: [
{
name: 'title',
type: 'text',
required: true,
},
{ name: 'content', type: 'richText' },
],
}

## Set Blocks with RichText fields and Extensibility

In /src/payload.config.ts:

## Use dedicated React component in Block

npm i @payloadcms/ui

To regenerate an importMap.js file
npx payload generate:importmap
