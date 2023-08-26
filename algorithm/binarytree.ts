class TreeNode {
  constructor(
    public value: number,
    public left?: TreeNode | null,
    public right?: TreeNode | null
  ) {
    if (left == undefined) {
      this.left = null;
    }

    if (right == undefined) {
      this.right = null;
    }
  }
}

function createNode(value: number): TreeNode {
  if (value >= 4) {
    return new TreeNode(value);
  } else {
    return new TreeNode(
      value,
      createNode(value * 2),
      createNode(value * 2 + 1)
    );
  }
}

function main() {
  const root = createNode(1);
  console.log(root.value);
  console.log(root.left!.value);
  console.log(root.right!.value);
  const left = root.left!;
  const right = root.right!;
  console.log(left.left!.value);
  console.log(left.right!.value);
}

main();
