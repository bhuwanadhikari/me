import { Component, OnInit } from '@angular/core';
import { Photo} from './photo';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [HttpService]
})

export class GalleryComponent implements OnInit {
  gphotos: any;
    /*[{
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    {
    'url': 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1455185767000/photosp/99f0c698-5716-4735-b1fd-f927c1757e01/stock-photo-nature-mountain-scenic-earth-peak-peaks-summit-photooftheday-nepal-99f0c698-5716-4735-b1fd-f927c1757e01.jpg',
      'caption': 'Chandragiri Hills covered with snows'
    },
    ]*/


  index = 1;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getGallery().subscribe((resGallery) => this.gphotos = resGallery);
  }

}
