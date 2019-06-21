<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$NIM=$data['NIM'];
	$namaAnggota=$data['namaAnggota'];
	$jabatan=$data['jabatan'];
	$ttl=$data['ttl'];
	$alamat=$data['alamat'];
	$photo=$data['image'];
	$id_Bidang=$data['id_Bidang'];;
	$sql = "update anggota set namaAnggota='$namaAnggota', jabatan='$jabatan', ttl='$ttl', alamat='$alamat', photo='$photo', id_Bidang='$id_Bidang' where NIM='$NIM'";
	
	
	$info=array();
	$info['sql']=$sql;
	if (mysqli_query($koneksi, $sql)) {
		$info['success'] =1;
		$info['detail'] = 'success';
	} else {
		$info['success'] =0;
		$info['detail'] =mysqli_error($koneksi);
	}
	mysqli_close($koneksi);
	echo json_encode($info);
?>