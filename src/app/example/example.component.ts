import {Component} from '@angular/core';
import {Tree} from '../common/modules/tree/types/tree';

@Component({
  selector: 's0-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {

  tree: Tree;
  treeSelection: Tree;

  constructor() {
    this.tree = this.getSampleTree();
  }

  onTreeSelectionChange(treeSelection) {
    this.treeSelection = treeSelection;
  }

  getSampleTree(): Tree {
    return {
      children: [
        {
          label: 'Branch 1',
          expanded: true,
          children: [
            {
              label: 'Branch 1.1',
              expanded: true,
              children: [
                {
                  label: 'Branch 1.1.1',
                  children: [
                    {
                      label: 'Branch 1.1.1.1',
                      children: [
                        {
                          label: 'Branch 1.1.1.1.1',
                          children: [
                            { id: '1.1.1.1.1.1', label: 'Leaf 1.1.1.1.1.1' },
                            { id: '1.1.1.1.1.2', label: 'Leaf 1.1.1.1.1.2' },
                          ]
                        },
                      ]
                    },
                  ]
                },
                { id: '1.1.2', label: 'Leaf 1.1.2' },
                { id: '1.1.3', label: 'Leaf 1.1.3' },
                { id: '1.1.4', label: 'Leaf 1.1.4' },
                { id: '1.1.5', label: 'Leaf 1.1.5' },
                { id: '1.1.6', label: 'Leaf 1.1.6' },
              ],
            },
            {
              label: 'Branch 1.2',
              children: [
                { id: '1.2.1', label: 'Leaf 1.2.1' },
                { id: '1.2.2', label: 'Leaf 1.2.2' },
                { id: '1.2.3', label: 'Leaf 1.2.3' },
                { id: '1.2.4', label: 'Leaf 1.2.4' },
                { id: '1.2.5', label: 'Leaf 1.2.5' },
                { id: '1.2.6', label: 'Leaf 1.2.6' },
              ],
            },
            {
              label: 'Branch 1.3',
              children: [
                { id: '1.3.1', label: 'Leaf 1.3.1' },
                { id: '1.3.2', label: 'Leaf 1.3.2' },
                { id: '1.3.3', label: 'Leaf 1.3.3' },
                { id: '1.3.4', label: 'Leaf 1.3.4' },
                { id: '1.3.5', label: 'Leaf 1.3.5' },
                { id: '1.3.6', label: 'Leaf 1.3.6' },
              ],
            },
          ],
        },
        {
          label: 'Branch 2',
          children: [
            {
              label: 'Branch 2.1',
              children: [
                { id: '2.1.1', label: 'Leaf 2.1.1' },
                { id: '2.1.2', label: 'Leaf 2.1.2' },
              ],
            },
            {
              label: 'Branch 2.2',
              children: [
                { id: '2.2.1', label: 'Leaf 2.2.1' },
                { id: '2.2.2', label: 'Leaf 2.2.2' },
                { id: '2.2.3', label: 'Leaf 2.2.3' },
                { id: '2.2.4', label: 'Leaf 2.2.4' },
              ],
            },
          ],
        },
        {
          label: 'Branch 3',
          children: [
            {
              label: 'Branch 3.1',
              children: [
                { id: '3.1.1', label: 'Leaf 3.1.1' },
                { id: '3.1.2', label: 'Leaf 3.1.2' },
              ],
            },
            {
              id: '3.2',
              label: 'Leaf 3.2'
            }
          ],
        },
      ],
    };
  }
}
