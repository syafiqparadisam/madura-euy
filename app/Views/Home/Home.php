<!-- Popular Products -->
<section
	class="flex w-full py-1 hp:py-4 tablet:py-7 justify-center items-center flex-wrap my-10 tablet:gap-10 gap-10 text-center hp:gap-3 mx-auto"
	id="popularProduct">
</section>
<!-- popular Products end -->

<!-- Promo -->
<section class="flex w-4/5 mx-auto justify-between tablet:flex-row flex-col h-full shadow-lg rounded-xl">
	<div class="tablet:w-1/5 w-full flex-col flex justify-around rounded-md py-3 hp:py-10 px-4 bg-black text-white">
		<h2 class="font-bold tablet:text-lg laptop:text-lg text-md hp:mb-3">Promo hari ini</h2>
		<h2 class="font-bold tablet:text-lg laptop:text-4xl text-md hp:block hidden text-left tablet:text-center mb-3">
			Hingga 40%</h2>
		<h5 class="hp:text-sm text-xs hp:block hidden">Dapatkan produk eksklusif kami dengan diskon spesial hanya untuk
			hari ini!</h5>
	</div>
	<div class="flex gap-10 tablet:w-4/5 justify-center items-center border-black flex-wrap m-auto laptop:px-0 border-opacity-50 p-4 rounded-lg"
		id="promoProduct">
	</div>
</section>
<!-- Promo end-->

<!-- Big card product -->
<section class="flex tablet:w-4/5 justify-center items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-4 mx-auto"
	id="bigProduct">
	<?php foreach ($data["big"] as $big): ?>
		<a href="product/<?php echo $big->id ?>" class="nav__link cardProducts" data-link>
			<div class="shadow-md p-3 flex flex-col m-auto rounded-md cursor-pointer mh-25">
				<!-- Image -->
				<div
					class="flex flex-col overflow-hidden m-auto rounded-md justify-center items-center tablet:h-[120px] tablet:w-[120px] hp:w-[70px] hp:h-[70px] h-[70px] w-[70px]">
					<img src="<?php $big->image[0] ?>"
						class="rounded-md w-full h-full object-cover object-center mx-auto" />
				</div>

				<!-- Title, Stock, Rating,Location, Price -->
				<div class="flex flex-col tablet:w-48 hp:w-32 w-24 flex-wrap mt-3">
					<div class="flex flex-col flex-wrap">
						<h1 class="font-bold text-wrap tablet:text-xs hp:text-md leading-1 text-sm overflow-hidden">
							<?php echo $big->title ?>
						</h1>
						<p class="font-bold lh-1 tablet:text-lg hp:text-xs text-sm"><?php echo $big->price ?></p>
					</div>
					<p class="text-sm tablet:text-md">Stock: <?php echo $big->stock ?></p>
					<div class="flex items-center">
						<div class="flex gap-1 items-center ">
							<?php for ($i = 1; $i < $big->rating; $i++) { ?>
								<span class="bi bi-star-fill"></span>
							<?php } ?>
						</div>
						<p class="ml-2 font-bold tablet:text-md hp:text-sm text-xs"><?php echo $big->rating ?></p>
					</div>
					<div class="flex gap-2 items-center">
						<i class="bi bi-house-fill"></i>
						<p class="font-bold tablet:text-md hp:text-sm text-xs"><?php echo $big->location ?></p>
					</div>
				</div>
			</div>
		</a>
	<?php endforeach; ?>
</section>