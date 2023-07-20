<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cms' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~-MbrTW$iLsA.1Ig#%>&;ZpK!2%F(vv9_+hK5!G<rMW;=={B[LBoF@.KTt%%MS}Z' );
define( 'SECURE_AUTH_KEY',  'aIJq)W/)EbA|{ERE] Nze$Oze`Kueq@k52t:wY(]J5%D{qI!)[$%417<DpJ0aLZn' );
define( 'LOGGED_IN_KEY',    '8*q{yn^nd7{ q$.?+U4/k7g#g2SQ~8m%GAH39hqG9V5GM]|L.|N(G%_EdLQ`)!A8' );
define( 'NONCE_KEY',        '- ?nTEpZ hC1TE:tD-nJT]e@^MreDBtITE8R&N*C`H{Q^x}{rLfAvE*/QjvnpVNM' );
define( 'AUTH_SALT',        'Et(?~U!_b1{8[@a&?0@6L4h4^#%vtUZd[(FSZXLo{@NcipB 2!Aa)*?*Jwi]9W~e' );
define( 'SECURE_AUTH_SALT', ']I!){PAqAL$]2wgfeH!d>+dz?hT[NH^J`>P@G/>ls5N4XwvCBTB.c9%0Zs-u=56^' );
define( 'LOGGED_IN_SALT',   'y1P|lK&;3IuEaQUy,3H}fW=I.jBkcBxGwLh;@7&m>jR|z!E^^ic4y%;bYx{e$e)#' );
define( 'NONCE_SALT',       'nx>tBGk(w$)#pB<bN4v)LEg2S#x0yUXV^&86N7=v@ZAUxfVAq{y)t;;@xP?r9[Pr' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
