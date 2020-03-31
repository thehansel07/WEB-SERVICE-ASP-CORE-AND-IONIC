import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Estudiante} from './Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
URL='https://estudianteapi.azurewebsites.net/estudiante';
  constructor(private http:HttpClient) {  }


ObtenerTodos():Observable<HttpResponse<Estudiante[]>>{
  return this.http.get<Estudiante[]>(this.URL,{observe:'response'});
}

AgregarEstudiante(estud:Estudiante):Observable<HttpResponse<Estudiante>>{
  return this.http.post<Estudiante>(this.URL, estud, {observe: 'response'});



}
ObtenerporId(matricula:string):Observable<HttpResponse<Estudiante>>{
  return this.http.get<Estudiante>(this.URL + '/' + matricula, {observe:'response'});

}



EliminarEstudiante(matricula:string):Observable<HttpResponse<void>>{
  return this.http.delete<void>(this.URL + '/' +matricula, {observe:'response'});





}



ActualizadoEstudiante(estud:Estudiante):Observable<HttpResponse<Estudiante>>{
  console.log('Vamos a editar estudiante...');
  return this.http.put<Estudiante>(this.URL + '/' + estud.matricula, estud, {observe: 'response'});




}













}