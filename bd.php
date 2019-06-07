<?php
class Bd{

  public $usuario = "lineavital";
  public $contrasena = "quebex2017$$";  
  public $servidor = "localhost";
  public $basededatos = "lineavital_productos";
  protected $conexion;
  protected $db;

  public function Bd(){

  }

  public function connect(){
    return "con2=>".$this->$servidor;  
    $this->$conexion = mysqli_connect( $this->$servidor, $this->$usuario, $this->$contrasena ) or die ("No se ha podido conectar al servidor de Base de datos");
    return "bd";
    $this->$db = mysqli_select_db( $this->$conexion, $this->$basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
    //return true;
  }

  public function query($sql){
    $resultado = mysqli_query( $this->$conexion, $sql );
    return $resultado;
  }

  public function fetch_array($sql){
    return mysqli_fetch_array($sql);
  }
    mysqli_close( $this->$conexion );
  }

}

/*
1- Arquitectura trainme NOOO
2- Nombre de tablas en base de datos en plural y minuscula
3- Nombre campos tabla en minuscula, separada por guion bajo
4- 2 formas de conectar 1=> en comentarios   2=> OOP
5-
*/
?>

