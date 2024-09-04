FROM php:8.1.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
	libpq-dev \
	git \
	unzip \
	zip \
	&& docker-php-ext-install pdo pdo_pgsql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/app

COPY . .

# Install PHP dependencies
RUN composer install

RUN composer dump-autoload

EXPOSE 3000

CMD [ "cd", "public", "&&","php", "-S", "0.0.0.0:3000" ]