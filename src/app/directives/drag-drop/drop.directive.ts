import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {DragData, DragDropService} from './drag-drop.service';
import 'rxjs/add/operator/take';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {
  @Output() dropped: EventEmitter<DragData> = new EventEmitter();
  @Input() dropTags: string[] = [];
  @Input() dragEnterClass: string;
  private drag$;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private service: DragDropService) {
    this.drag$ = this.service.getDragData().take(1);
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    console.log('enter=' + this.dragEnterClass);
    e.preventDefault();
    e.stopPropagation();
    if (this.elementRef.nativeElement === e.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.renderer.addClass(this.elementRef.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    console.log('over=' + this.dragEnterClass);
    e.preventDefault();
    e.stopPropagation();
    if (this.elementRef.nativeElement === e.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.renderer.setProperty(e, 'dataTransfer.effectAllowed', 'all');
          this.renderer.setProperty(e, 'dataTransfer.dropEffect', 'move');
        } else {
          this.renderer.setProperty(e, 'dataTransfer.effectAllowed', 'none');
          this.renderer.setProperty(e, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    console.log('leave=' + this.dragEnterClass);
    e.preventDefault();
    e.stopPropagation();
    if (this.elementRef.nativeElement === e.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.renderer.removeClass(this.elementRef.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    console.log('drop=' + this.dragEnterClass);
    e.preventDefault();
    e.stopPropagation();
    if (this.elementRef.nativeElement === e.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.renderer.removeClass(this.elementRef.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }
}
