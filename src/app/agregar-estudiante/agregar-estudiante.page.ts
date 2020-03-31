import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { Estudiante } from '../Estudiante';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.page.html',
  styleUrls: ['./agregar-estudiante.page.scss'],
})
export class AgregarEstudiantePage implements OnInit {
  estud:Estudiante;
  constructor(
    private toasController:ToastController,
    private alertControl:AlertController,
    private navctrl:NavController,
    private estudianteService:EstudianteService,
    private activateRoute:ActivatedRoute
   
    ) { }

  ngOnInit() {
    this.estud = new Estudiante();
    const matricula = this.activateRoute.snapshot.paramMap.get('matricula');
    console.log('Estudiante-ID'+matricula);
    if(matricula !== null){
      console.log('Id no es nulo para estudiante');
      this.estudianteService.ObtenerporId(matricula).subscribe((estud:HttpResponse<Estudiante>)=>{
        this.estud = estud.body;
        console.log(this.estud);

      });



    }
    
  }

  GuardarEstudiantes(){
    console.log('Guardando Datos ingregasdos...',this.estud.matricula);
    if(this.estud.matricula == this.estud.matricula){
    this.estudianteService.AgregarEstudiante(this.estud).subscribe(async(estud:HttpResponse<Estudiante>)=>{
    let toast = await this.toasController.create({
      message:'Datos Guardados correctamente...' + this.estud.nombre,
      duration:1000
    });
    return await toast.present().then(()=>{
      this.navctrl.navigateRoot('home');



    })

    });

  }else{
    console.log('Actualizar....');
    this.estudianteService.ActualizadoEstudiante(this.estud).subscribe(async(estud:HttpResponse<Estudiante>)=>{
     let toast = await this.toasController.create({
       message:'El estudiante' + this.estud.nombre + 'fue actualizado...',
       duration:1000



     });
     return await toast.present().then(()=>{
       this.navctrl.navigateRoot('home');


     });


    });


  }



  }




  


}