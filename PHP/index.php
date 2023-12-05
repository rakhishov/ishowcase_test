<?php
declare(strict_types=1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

spl_autoload_register(function ($class) {
    require __DIR__ . "/$class.php";
});

$parts = explode("/", $_SERVER["REQUEST_URI"]);

if ($parts[1] != "products") {
    http_response_code(404);
    exit;
}

$cat = $parts[2] ?? null;
$val = $parts[3] ?? null;
$database = new Database("127.0.0.1", "products", "root", "");
$conn = $database->getConnection();
$gateway = new ProductGateway($database);

$controller = new ProductController($gateway);

$controller->processRequest($_SERVER["REQUEST_METHOD"], $cat, $val);

?>