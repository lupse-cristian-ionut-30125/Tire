import { Component, OnInit } from '@angular/core';

import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { TyreService } from '../services/my-http-service.service';
import { FormData } from '../form-data';

@Component({
  selector: 'app-multistepform',
  templateUrl: './multistepform.component.html',
  styleUrls: ['./multistepform.component.css'],
})
export class MultistepformComponent {
  data: any = {};
  showCamera = false;
  isImageCaptured = false;
  showCapturedImage = false;
  showCapturedImage1 = false;
  showCapturedImage2 = false;
  showCapturedImage3 = false;
  showCapturedImage4 = false;
  showCapturedImage5 = false;
  capturedImage: string = '';
  capturedImage1: string = '';
  capturedImage2: string = '';
  capturedImage3: string = '';
  capturedImage4: string = '';
  capturedImage5: string = '';
  constructor(private userData: TyreService) {
    this.userData.users().subscribe((formData) => {
      this.users = formData;
    });
  }

  currentStep = 1;
  formData: FormData = {
    NumarInmatriculare: '',
    URLNumarInmatriculare: '',
    Kilometrii: '',
    URLKilometrii: '',
    ProfilInterior: '',
    URLProfilInterior: '',
    ProfilMijloc: '',
    URLProfilMijloc: '',
    ProfilExterior: '',
    URLProfilExterior: '',
  };
  ngOnInit() {}

  private trigger1: Subject<any> = new Subject();
  private trigger2: Subject<any> = new Subject();
  private trigger3: Subject<any> = new Subject();
  private trigger4: Subject<any> = new Subject();
  private trigger5: Subject<any> = new Subject();
  public webcamImage1: WebcamImage | undefined;
  public webcamImage2: WebcamImage | undefined;
  public webcamImage3: WebcamImage | undefined;
  public webcamImage4: WebcamImage | undefined;
  public webcamImage5: WebcamImage | undefined;
  public webcamImage!: WebcamImage;
  imgWidht = 400;
  imgHeight = 300;
  imgQuality = 0.8;

  goToNextStep() {
    this.currentStep++;
    if (this.currentStep === 2) {
      this.showCapturedImage2 = this.showCapturedImage;
    } else if (this.currentStep === 3) {
      this.showCapturedImage3 = this.showCapturedImage;
    } else if (this.currentStep === 4) {
      this.showCapturedImage4 = this.showCapturedImage;
    } else if (this.currentStep === 5) {
      this.showCapturedImage5 = this.showCapturedImage;
    }
    this.isImageCaptured = false;
  }
  toggleCamera() {
    this.showCamera = !this.showCamera;
  }
  closeCamera() {
    this.showCamera = false;
    this.isImageCaptured = false;
    this.showCapturedImage1 = false;
    this.showCapturedImage2 = false;
    this.showCapturedImage3 = false;
    this.showCapturedImage4 = false;
    this.showCapturedImage5 = false;
  }
  resetImage(): void {
    this.isImageCaptured = false;
    this.showCapturedImage = false;
  }
  goToPreviousStep() {
    this.currentStep--;
    if (this.currentStep === 1) {
      this.showCapturedImage = this.showCapturedImage1;
    } else if (this.currentStep === 2) {
      this.showCapturedImage = this.showCapturedImage2;
    } else if (this.currentStep === 3) {
      this.showCapturedImage = this.showCapturedImage3;
    } else if (this.currentStep === 4) {
      this.showCapturedImage = this.showCapturedImage4;
    } else if (this.currentStep === 5) {
      this.showCapturedImage = this.showCapturedImage5;
    }
  }
  public getSnapshot(section: number): void {
    if (section === 1) {
      this.trigger1.next(void 0);
    } else if (section === 2) {
      this.trigger2.next(void 0);
    } else if (section === 3) {
      this.trigger3.next(void 0);
    } else if (section === 4) {
      this.trigger4.next(void 0);
    } else if (section === 5) {
      this.trigger5.next(void 0);
    }
  }
  onFileSelected(event: Event, fieldName: string) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files ? inputElement.files[0] : null;
    this.formData[fieldName] = file ?? null;
    console.log(this.formData);
  }
  handleFileInput(event: any, step: number) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        if (step === 1) {
          this.formData.URLNumarInmatriculare = dataUrl;
          console.log(this.formData);
        }
        if (step === 2) {
          this.formData.URLKilometrii = dataUrl;
          console.log(this.formData);
        }
        if (step === 3) {
          this.formData.URLProfilInterior = dataUrl;
          console.log(this.formData);
        }
        if (step === 4) {
          this.formData.URLProfilMijloc = dataUrl;
          console.log(this.formData);
        }
        if (step === 5) {
          this.formData.URLProfilExterior = dataUrl;
          console.log(this.formData);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  captureImg(image: WebcamImage, step: number, fieldName: string) {
    if (step === 1) {
      this.webcamImage1 = image;
      this.capturedImage1 = image.imageAsDataUrl;
      this.isImageCaptured = true;
      this.showCapturedImage1 = true;
      this.webcamImage1 = image;
      this.formData.URLNumarInmatriculare = image.imageAsDataUrl;
      console.log(
        'got image (section 1): ',
        this.formData.URLNumarInmatriculare
      );
      console.log('nr: ', this.formData.NumarInmatriculare);
    }
    if (step === 2) {
      this.webcamImage2 = image;
      this.capturedImage2 = image.imageAsDataUrl;
      this.isImageCaptured = true;
      this.showCapturedImage2 = true;
      this.webcamImage2 = image;
      this.formData.URLKilometrii = image.imageAsDataUrl;
      console.log('got image (section2): ', this.formData.URLKilometrii);
      console.log('nr: ', this.formData.Kilometrii);
    }
    if (step === 3) {
      this.webcamImage3 = image;
      this.capturedImage3 = image.imageAsDataUrl;
      this.isImageCaptured = true;
      this.showCapturedImage3 = true;
      this.webcamImage3 = image;
      this.formData.URLProfilInterior = image.imageAsDataUrl;
      console.log('got image (section3): ', this.formData.URLProfilInterior);
      console.log('nr: ', this.formData.ProfilInterior);
    }
    if (step === 4) {
      this.webcamImage4 = image;
      this.capturedImage4 = image.imageAsDataUrl;
      this.isImageCaptured = true;
      this.showCapturedImage4 = true;
      this.webcamImage4 = image;
      this.formData.URLProfilMijloc = image.imageAsDataUrl;
      console.log('got image (section4): ', this.formData.URLProfilMijloc);
      console.log('nr: ', this.formData.ProfilMijloc);
    }
    if (step === 5) {
      this.webcamImage5 = image;
      this.capturedImage5 = image.imageAsDataUrl;
      this.isImageCaptured = true;
      this.showCapturedImage5 = true;
      this.webcamImage5 = image;
      this.formData.URLProfilExterior = image.imageAsDataUrl;
      console.log('got image (section2): ', this.formData.URLProfilExterior);
      console.log('nr: ', this.formData.ProfilExterior);
    }
  }

  dataUrlToFile(dataUrl: string, filename: string, fileType: string): File {
    const arr = dataUrl.split(',');
    const byteString = atob(arr[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new File([arrayBuffer], filename, { type: fileType });
  }

  public get invokeObservable1(): Observable<any> {
    return this.trigger1.asObservable();
  }
  public get invokeObservable2(): Observable<any> {
    return this.trigger2.asObservable();
  }
  public get invokeObservable3(): Observable<any> {
    return this.trigger3.asObservable();
  }
  public get invokeObservable4(): Observable<any> {
    return this.trigger4.asObservable();
  }
  public get invokeObservable5(): Observable<any> {
    return this.trigger5.asObservable();
  }
  submit() {
    console.log(this.formData);
    console.log(this.currentStep);
    this.saveDataToDatabase(this.formData);
  }

  users: any;

  saveDataToDatabase(formData: any) {
    console.warn(formData);
    this.userData.saveUser(formData).subscribe((result) => {
      console.warn(result);
    });
    console.log(formData);
  }
}
