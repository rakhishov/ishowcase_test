<?php
class ProductController{
    public function __construct(private ProductGateway $gateway)
    {}

    public function processRequest(string $method, ?string $cat, ?string $val): void
    {
        if($val){
            $this->processResourceRequest($method, $cat, $val);
            return;
        }
        else {
            
            $this->processCollectionRequest($method);
            
        }
    }
    private function processResourceRequest(string $method, string $cat, string $val): void {
        $product = null;
        if($cat == 'category'){
            $id = $this->gateway->getCategoryId($val);
            $product = $this->gateway->getByCategory($id);
        }
        else if($cat == 'items'){
            $product = $this->gateway->getWatchById($val);
        }
        if ( ! $product) {
            http_response_code(404);
            echo json_encode(["message" => "Product not found"]);
            return;
        }
        
        switch ($method) {
            case "GET":
                echo json_encode($product);
                break;

            }
    }

    private function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
    
            default:
                http_response_code(405);
                header("Allow: GET, POST");
        }
    }

}


?>