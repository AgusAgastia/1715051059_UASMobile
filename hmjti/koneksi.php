<?php
$server = "localhost";
$user = "id9801473_agastia82";
$pass = "agus1414";
$db = "id9801473_hmjti";
$koneksi = mysqli_connect($server,$user,$pass,$db);
mysqli_set_charset($koneksi,'utf8');
if(mysqli_connect_errno()){
	echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();
}else{
}
?>