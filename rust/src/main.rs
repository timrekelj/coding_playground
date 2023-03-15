pub struct BinaryTree<String> {
    pub value: String,
    pub left: Option<Box<BinaryTree<T>>>,
    pub right: Option<Box<BinaryTree<T>>>,
}

impl<String> BinaryTree<String> {
    pub fn new(value: String) -> Self {
        BinaryTree {
            value,
            left: None,
            right: None,
        }
    }

    pub fn left(mut self, node: BinaryTree<String>) -> Self {
        self.left = Some(Box::new(node));
        self
    }

    pub fn right(mut self, node: BinaryTree<String>) -> Self {
        self.right = Some(Box::new(node));
        self
    }

    pub fn print_tree(&self) {
        println!("value: {}", self.value);
        if let Some(left) = &self.left {
            left.print_tree();
        }
        if let Some(right) = &self.right {
            right.print_tree();
        }
    }
}


fn main() {
    let tree = BinaryTree::new(1)
        .left(BinaryTree::new(2))
        .right(BinaryTree::new(3));
    tree.print_tree();
}