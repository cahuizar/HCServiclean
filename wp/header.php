<!DOCTYPE html>
<html lang="en" >
<head>
  	<meta charset="UTF-8">
	<title><?php bloginfo('title') ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css'>
 	<link rel='stylesheet prefetch' href='https://use.fontawesome.com/releases/v5.0.11/css/all.css'>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="all" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <?php wp_head();?>
</head>

<body>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light  fixed-top">
	<a class="navbar-brand scroll-link" href="#home">
		<img class="logo" src="<?php echo get_template_directory_uri(); ?>/assets/images/logoTransparent.png" alt="logo_Transparent" border="0">
	</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<?php /* wp_nav_menu(); */?>
			<ul class="nav navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" href="#home" class="scroll-to">Home</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#about" class="scroll-to">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#services" class="scroll-to">Services</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#contact" class="scroll-to">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#faq" class="scroll-to">FAQ</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#newsletter" class="scroll-to">Newsletter</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="page-body"  data-spy="scroll" data-target="#nav" data-offset="0">