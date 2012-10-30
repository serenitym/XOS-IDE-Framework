<?
// The access informations for the users.
// username and password are encrypted with md5

/*

To create your md5 username and password encrypted with md5
You can go here:

http://www.md5.cz/

Copy the the encrypted value and replace the already defined below

*/


$users = array();

$newUser = array
(
	'usr' => '8c998fc48b716da2b1f9c3a9495b1b3a', // the username encrypted with md5 ( to replace with your encrypted username )
	'psw' => '6e6bc4e49dd477ebc98ef4046c067b5f', // the password encrypted with md5  ( to replace with your encrypted password  )
	'root' => '../XOSIDE_HD' // the root folder path of your files ( to replace with your folder path  )
);
	

array_push( $users , $newUser );
	




?>