#
# Expected Result
#	only 2 blocks spilled instead of 10
#

		.word   160;
# initialize the stack cache registers: stack top and mem top
		addi    r1  = r0, 0x900;
		mts     s5 = r1;
		mts     s6 = r1;
# reserve some space on the stack cache
		sres    10;
		nop;
		nop;
		nop;
# see if lazy pointer moves as it should
		sbs     [r0 + 0] = r0;
		sbs     [r0 + 1] = r0;
		sbs     [r0 + 7] = r0;
		nop;
		nop;
		nop;
# spill all stack cache content
		sres    512;
		halt;
		nop;
		nop;
		nop;
