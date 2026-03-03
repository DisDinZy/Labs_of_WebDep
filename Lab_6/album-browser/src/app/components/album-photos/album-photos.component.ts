import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.services';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html'
  
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute, 
    private service: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.service.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
        this.cdr.detectChanges(); 
      });
    });
    
  }
}
