import {KuantiaCrm} from "./KuantiaCrm.node";

test("smoke", () => {
    const node = new KuantiaCrm()
    expect(node.description.properties).toBeDefined()
})
