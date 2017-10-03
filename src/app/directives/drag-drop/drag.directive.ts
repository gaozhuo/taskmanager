import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DragDropService} from './drag-drop.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @Input() dragTag: string;
  @Input() dragData: any;
  @Input() draggedClass: string;
  private _isDraggable = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private service: DragDropService) {

  }


  get isDraggable(): boolean {
    return this._isDraggable;
  }

  @Input('appDrag')
  set isDraggable(value: boolean) {
    this._isDraggable = value;
    this.renderer.setAttribute(this.elementRef.nativeElement, 'draggable', `${value}`);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    if (e.target === this.elementRef.nativeElement) {
      this.renderer.addClass(this.elementRef.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event) {
    if (e.target === this.elementRef.nativeElement) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.draggedClass);
    }
  }


}
