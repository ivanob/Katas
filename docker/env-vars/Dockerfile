FROM php:7.2-apache

LABEL maintainer="ivan@gmail.com"

RUN pecl install xdebug-2.6.0
RUN docker-php-ext-enable xdebug
RUN docker-php-ext-install pdo pdo_mysql

ENV DISPLAY_ERRORS="On"

COPY php.ini /usr/local/etc/php/php.ini
COPY index.php /var/www/html/
