https://www.youtube.com/watch?v=U71TQN68QGU&ab_channel=SimpleTech
1'11'34

# Install Angular

Angular version:
ng --version

npm install -g @angular/cli

# Create Angular project

ng new project_name

- which Stylesheet (CSS by default)
- SSR ? N

launch project:
ng serve

# Component

They're often composed of 4 files (.css, .html, .ts, .spec.ts for tests - this one might be skipped)

Create a component:
ng g c folder_name/component_name (w/ 4 files)
ng g c folder_name/component_name --skip-tests (only 3 files w/o tests created)

ng g c components/playing-card

import Component in parent component in .ts file via imports: [...]

# Input

To send data in a component (equivalent of props in React)

In /models/class.models.ts:

create class:
export class ClassName {
name: string | undefined;
...
}

in child component .ts file:
import { Component, Input } from '@angular/core';
import class:
import { ClassName } from '../../models/class.models';

export class PlayingCardComponent {
@Input({
required: true, // option
alias: 'my-monster', // option
})
object: ClassName (= type) = new ClassName();
}

in child component .html file:

<div>{{ object.name }}</div>

In parent component ts. file:
import { ClassName } from '../../models/class.models';

export class AppComponent {
object1!: ClassName;
object2!: ClassName;

Instanciate two objects of the ClassName type
constructor() {
this.object1 = new ClassName();
this.object1.name = 'Bulb';

this.object2 = new ClassName();
this.object2.name = 'Pik';
}
}

in parent component .html file:
<app-playing-card [object]="object1" />
<app-playing-card [object]="object2" />

# InputSignal

In playing-card.component.ts file:
import { Component, input, InputSignal } from '@angular/core';

export class Component {
  object: InputSignal<ClassName> = input(new Object(), {
    alias: 'my-object',
    transform: (value: ClassName) => {
      value.hp = value.hp / 3;
      return value;
    },
  });
}

In playing-card.component.html file:
{{object().name}} // add parentheses
