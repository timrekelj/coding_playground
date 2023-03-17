pub struct BinaryTree<T> {
    pub value: T,
    pub left: Option<Box<BinaryTree<T>>>,
    pub right: Option<Box<BinaryTree<T>>>,
}

impl<T> BinaryTree<T> {
    pub fn new(value: T) -> Self {
        BinaryTree {
            value,
            left: None,
            right: None,
        }
    }
    
    pub fn left(mut self, node: BinaryTree<T>) -> Self {
        self.left = Some(Box::new(node));
        self
    }

    pub fn right(mut self, node: BinaryTree<T>) -> Self {
        self.right = Some(Box::new(node));
        self
    }
}