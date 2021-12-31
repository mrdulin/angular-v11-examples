import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example',
})
export class ExampleComponent implements OnInit {
  ngOnInit() {}
  navigateTo = (): void => {
    window.parent.postMessage('NESTED_NAVIGATION', 'target_origin');
  };
}
