import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../Estudiante';
import { EstudianteService } from '../estudiante.service';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { HttpResponse } from '@angular/common/http';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  estudlist:Estudiante[];
  constructor(
    private estudianteService:EstudianteService,
    private toasController:ToastController,
    private alertControl:AlertController,
    private navctrl:NavController
    ) { }

  ngOnInit():void {
    this.loadAll();
  }
  Refrescar(event){
    console.log('Realizando operacion...');
    this.loadAll();
    setTimeout(()=>{
      console.log('Operacion Realizada...');
      event.target.complete();



    },2000);




  }






  loadAll(){
    this.estudianteService.ObtenerTodos().subscribe(async (proList:HttpResponse<Estudiante[]>)=>{
      this.estudlist=proList.body;
      let toast=await this.toasController.create({
        message:"Mostrando estudiantes guardados...",
        duration:3000
      });
      return await toast.present();
    })
  }


  async BorrarEstudiante(matricula:string){
    console.log('Estudiante eliminado por' + matricula);
    const confirm = this.alertControl.create({
      message:'Estas seguro que deseas eliminar lo?',
      buttons:[


        {
          text:'No',
          handler:() =>{
            console.log('En proceso...');



          }
        },
          {
            text:'Si',
          handler:() =>{
          this.estudianteService.EliminarEstudiante(matricula).subscribe(async()=>{
          let toast = await this.toasController.create({
            message:'La matricula '  + matricula + " " + 'fue eliminado correctamente...',
            duration:1000



          });
          toast.present();
          this.navctrl.navigateRoot('/home');


          });
          







          }




   
          
         
          
          



        }

        


      ]




    });
    (await confirm).present();


    



    
  }



  



      














    





  





}
