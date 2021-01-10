import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialog(event: any) {
    let active = this.images.find(e => e.position == event);
    let before = this.images.filter(e => e.position < event);
    let after = this.images.filter(e => e.position > event);
    const dialogRef = this.dialog.open(DialogViewImage, {
      data: { active: active, before: before, after: after },
      panelClass: 'panel'
    });

    // dialogRef.afterClosed().subscribe(result => {

    // });
  }

  images: any = [{ position: 1, image: "../../../assets/Audi-Ronal-18.jpeg" },
  { position: 2, image: "../../../assets/BMW-M3-E46-19.jpeg" },
  { position: 3, image: "../../../assets/BMW-MV3-18.jpeg" },
  { position: 4, image: "../../../assets/BMW-442M-19.jpeg" },
  { position: 5, image: "../../../assets/Ford-Fiesta-ST-17.jpeg" },
  { position: 6, image: "../../../assets/Ford-Focus-ST-18.jpeg" },
  { position: 7, image: "../../../assets/Mini-style-1-gloss-black-or-white-finish-17.jpeg" },
  { position: 8, image: "../../../assets/Mini-style-2-17.jpeg" },
  { position: 9, image: "../../../assets/Mini-Style-3-17.jpeg" },
  { position: 10, image: "../../../assets/Volkswagen-Golf-GT-16.jpeg" },
  { position: 11, image: "../../../assets/home3.jpg" },
  { position: 12, image: "../../../assets/home2.jpg" },
  { position: 13, image: "../../../assets/home1.jpg" },
  { position: 14, image: "../../../assets/repair4.jpg" },
  { position: 15, image: "../../../assets/repair1.jpg" },
  { position: 16, image: "../../../assets/repair2.jpg" },
  { position: 17, image: "../../../assets/rapair3.jpg" },
  { position: 18, image: "../../../assets/repair4.jpg" },
  { position: 19, image: "../../../assets/automotiveTints3.jpg" },
  { position: 20, image: "../../../assets/automotiveTints2.jpg" },
  { position: 21, image: "../../../assets/automotiveTints4.jpg" },
  { position: 22, image: "../../../assets/automotiveTints1.jpg" },
  { position: 23, image: "../../../assets/remapping1.jpg" },
  { position: 24, image: "../../../assets/remapping2.png" },
  { position: 25, image: "../../../assets/engine1.png" },
  { position: 26, image: "../../../assets/engine2.jpg" },
  { position: 27, image: "../../../assets/wrapping2.jpg" },
  { position: 28, image: "../../../assets/wrapping1.jpg" },
  { position: 29, image: "../../../assets/wrapping3.jpg" },
  ]


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './DialogViewImage.html',
  styleUrls: ['./gallery.component.scss']
})
export class DialogViewImage {

  before: any = []
  after: any = []
  active: any ={}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.before = data.before;
    this.after = data.after;
    this.active = data.active;
  }






}