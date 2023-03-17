mod binary_tree;
use binary_tree::BinaryTree;

fn main() {
        let tree = BinaryTree::new(1)
            .left(BinaryTree::new(2))
            .right(BinaryTree::new(3));
        println!("{}", tree.value);
}
