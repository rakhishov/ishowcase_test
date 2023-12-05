<?php
class ProductGateway{
    private PDO $conn;

    public function __construct(Database $database){
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "SELECT *
                FROM products where type = 'item'";
                
        $stmt = $this->conn->query($sql);
        
        $data = [];
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        
        return $data;
    }

    public function getCategoryId(string $cat): int | false
    {
        $category = urldecode($cat);
        $sql = "SELECT *
                FROM products
                WHERE type = 'cat' AND large_title = :cat";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":cat", $category, PDO::PARAM_INT);
        
        $stmt->execute();
        
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $data['id'];
    }

    public function getByCategory(string $id): array | false
    {
        $sql = "SELECT *
                FROM products
                WHERE pid = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        $data = [];
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if($row['type'] == 'item'){
                $data[] = $row;
            }
            else{
                $data[] = $this->getByCategory($row['id']);
            }
        }
        
        return $data;
    }

    public function getWatchById(string $id): array | false
    {
        $sql = "SELECT *
                FROM products
                WHERE id = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $data;
    }
}
?>