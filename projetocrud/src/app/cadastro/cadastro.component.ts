import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../compartilhado/api.service';
import { CadastroModel } from './cadastro.model';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  formValue!: FormGroup;
  cadastroModelObj : CadastroModel = new CadastroModel();
  
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      descricao : [''],
      preco : [''],
      categoria : [''],
      estoque : [''],
      fornecedor :[''],

    })
  }
  postCadastroDetails(){
    this.cadastroModelObj.descricao = this.formValue.value.descricao;
    this.cadastroModelObj.preco = this.formValue.value.preco;
    this.cadastroModelObj.categoria = this.formValue.value.categoria;
    this.cadastroModelObj.estoque = this.formValue.value.estoque;
    this.cadastroModelObj.fornecedor = this.formValue.value.fornecedor;

    this.api.postCadastro(this.cadastroModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Produto cadastrado com sucesso")
      this.formValue.reset();
    },
    err=>{
      alert("Algo deu errado")
    })
  }
}
