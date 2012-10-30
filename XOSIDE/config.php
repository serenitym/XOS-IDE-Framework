<?
// The access informations for the users.
// username and password are encrypted with md5

/*

To create your md5 password encrypted with md5
You can go here:

http://www.md5.cz/

Copy the the encrypted value and replace the already defined below

*/


$users = array();

$newUser = array
(
	'usr' => 'xoside', // the username ( to replace with your custom username )
	'psw' => '6e6bc4e49dd477ebc98ef4046c067b5f', // the password encrypted with md5  ( to replace with your encrypted password  )
	'root' => '../XOSIDE_HD' // the root folder path of your files ( to replace with your folder path  )
);
	

array_push( $users , $newUser );
	




?>