<?php
require "bd.php";


class Producto extends Bd {

  public function fn_retornarTodosProductos(){
    $sql = "SELECT * FROM producto";

    $this->connect();
    $resultado = $this->query($sql);
    $productos = [];
    $i = 0;
    while($producto = $this->fetch_array($sql)){
     $productos[$i]['Codigo_Producto']  = $producto['Codigo_Producto'];
     $productos[$i]['Descripcion']      = $producto['Descripcion'];
     $i++;
    }

    $this->close();
    return $productos;
  }


}
?>

