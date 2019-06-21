<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$sql = "select * from kategori_bidang";
	$query = mysqli_query($koneksi, $sql);
	$arrHMJ = array();
	while ($row = mysqli_fetch_array($query)){
		$arrHMJ[] = $row;
	}
	echo json_encode($arrHMJ);
	mysqli_close($koneksi);
 ?>