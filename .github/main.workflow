workflow "Workflow" {
  on = "push"
  resolves = ["Test"]
}

action "Dependencies" {
  uses = "actions/npm@e7aaefe"
  runs = "ci"
}

action "Test" {
  uses = "actions/npm@e7aaefe"
  runs = "test"
  needs = ["Dependencies"]
}
