import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css','../../app.component.css']
})
export class PhotoComponent implements OnInit {

  ngOnInit() {
  }

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }
  
  fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
  }
  
  preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
  
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
      }
  }
  
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.fileData);
  //   this.http.post('url/to/your/api', formData)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.uploadedFilePath = res.data.filePath;
  //       alert('SUCCESS !!');
  //     })
  // }

}
