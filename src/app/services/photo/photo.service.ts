import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private camera: Camera) { }

  /**
   * Take a photo and return the base64 encoded data
   * @returns Promise<string>
   */
  public takePicture() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 200,
      targetWidth: 200,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    return this.camera.getPicture(options);
  }

  /**
   * Upload picture from library
   * @returns Promise<string>
   */
  public uploadPicture() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 200,
      targetWidth: 200,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return this.camera.getPicture(options);
  }

}
