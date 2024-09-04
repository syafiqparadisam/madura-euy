<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Toko madura</title>

	<!-- CSS-->
	<link href="./css/style.css" rel="stylesheet" />

	<!-- Tailwind -->
	<link href="./css/tailwind.css" type="text/tailwindcss" />
	<script
		src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
	<link href="css/tailwind.css" type="text/tailwindcss" />
	<script src="https://cdn.tailwindcss.com"></script>
	<link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />

	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
	<!-- CSS-->
	<style>

	</style>
	<script src="./js/tailwind.config.js"></script>
</head>

<body>
	<?php

	

	include "templates/navbar.php";
	if ($_SERVER["PATH_INFO"] == "") {
		include "templates/carousel.php";
	}
	include "/../app/init.php";
	include "templates/footer.php";
	?>

	<!-- Script -->
	<script src="/js/particlejs/particles.js"></script>
	<script src="js/particlejs/demo/js/app.js"></script>
	<!-- <script type="module" src="js/router.js"></script> -->
	<!-- <script type="module" src="js/home.js"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
		integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
		crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>

</body>

</html>