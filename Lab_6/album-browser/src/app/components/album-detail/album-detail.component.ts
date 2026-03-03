import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.services';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.albumService.getAlbum(id).subscribe(data => {
        this.album = data;
        this.cdr.detectChanges(); 
      });
    });
  }

  save() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(() => alert('Saved!'));
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}