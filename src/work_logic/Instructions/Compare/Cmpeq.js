import { compile_reg, compile_imm } from "./compilers";

class Cmpeq {
    constructor({ pred, pd, rs1, op2 }) {
        this.type = isNaN(op2) ? "cmpeq" : "cmepqi";
        this.pd = pd;
        this.rs1 = rs1;
        this.op2 = op2;
        this.func = 0b0000;
    
        if (this.type == "cmpeq") {
            this.binary = compile_reg(pred, pd, rs1, op2, this.func);
        } else {
            this.binary = compile_imm(pred, pd, rs1, op2, this.func);
        }
    }

    execute( { reg } ) {
        reg[this.pd] = reg[this.rs1] == (this.type == "cmpeq" ? 
            reg[this.op2] : Number(this.op2));
    }
}

export default Cmpeq;
