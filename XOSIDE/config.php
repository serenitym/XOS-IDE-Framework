<?
// The access informations for the users.

$users = array();

$newUser = array
(
	'usr' => '8c998fc48b716da2b1f9c3a9495b1b3a', // the username encrypted with md5 ( to replace with your encrypted username )
	'psw' => '6e6bc4e49dd477ebc98ef4046c067b5f', // the password encrypted with md5  ( to replace with your encrypted password  )
	'root' => '../XOSIDE_HD' // the root folder path of your files ( to replace with your folder path  )
);
	

array_push( $users , $newUser );
	


// CREATE YOUR USERNAME AND PASSWORD
// 1) Uncomment the 2 lines of code below for printing the md5 values
// 2) type your access info by replacing 'YOUR_USERNAME' and 'YOUR_PASSWORD'
// 3) save this file
// 4) Call this file from the browser 
// 5) copy the md5 printed values from the browser page
// 6) paste the printed md5 values into the array "$users" above
// 6) type your root ( the main dir path of your files to edit ) 
// 7) Remove the typed access info and comment again the 2 lines of code below
// 8) Save this file again
// 9) END
//10) Try the login. 

/*
echo 'usr: ' . md5('YOUR_USERNAME') . '<br/>';
echo 'psw: ' . md5('YOUR_PASSWORD');
*/





?>