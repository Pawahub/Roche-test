import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectAnnotations } from "../../state-management/some.selectors";
import { takeUntil } from "rxjs/operators";
import {
  LoadImageError,
  LoadImageSuccess
} from "../../state-management/some.actions";
import { Subject } from "rxjs";
import { IAnnotation } from "../../models/iannotaiton";

@Component({
  selector: 'some-component',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements AfterViewInit, OnDestroy {
  private ctx!: CanvasRenderingContext2D;
  private destroy$ = new Subject<void>()
  private image!: HTMLImageElement;

  @ViewChild('canvas') canvas!: ElementRef;

  constructor(private store$: Store) {
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.store$.select(selectAnnotations)
      .pipe(takeUntil(this.destroy$))
      .subscribe(annotations => annotations.length && this.drawImage(annotations[0]));
  }

  onClick(): void {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = 'https://image.dummyjson.com/512x512/101010';
    if (!img.complete) {
      img.onload = () => {
        this.image = img;
        this.store$.dispatch(LoadImageSuccess());
      };
      img.onerror = (err) => {
        this.store$.dispatch(LoadImageError({err: err}));
      };
    }
  }

  drawImage(annotation: IAnnotation): void {
    this.ctx.drawImage(this.image, 0, 0, );
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "white";
    this.ctx.ellipse(annotation.x, annotation.y, annotation.radiusX, annotation.radiusY, 0, 0, 360)
    this.ctx.stroke();
    const dataURL = this.canvas.nativeElement.toDataURL("image/png");
    dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
