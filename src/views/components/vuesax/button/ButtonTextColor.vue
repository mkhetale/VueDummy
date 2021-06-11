<!-- =========================================================================================
	File Name: ButtonTextColor.vue
	Description: Change color of text displayed on button
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Text Color" code-toggler>
		
		<p>You can change the font color of buttons, need only set the prop <code>text-color</code> with your color</p>

		<div class="demo-alignment">

			<vs-button type="border" text-color="#2362BE">Primary</vs-button>
			<vs-button type="border" text-color="#00AE31">Success</vs-button>
			<vs-button type="border" text-color="#F75454">Danger</vs-button>
			<vs-button type="border" text-color="rgb(255,159,67)">Warning</vs-button>
			<vs-button type="border" class="demo-text-dark" text-color="rgb(30,30,30)">Dark</vs-button>
			<vs-button type="border" text-color="tomato">Color</vs-button>
			<vs-button disabled text-color="rgb(0, 0, 0)">Disabled</vs-button>

		</div>

		<template slot="codeContainer">
&lt;vs-button type=&quot;border&quot; text-color=&quot;#2362BE&quot;&gt;Primary&lt;/vs-button&gt;
&lt;vs-button type=&quot;border&quot; text-color=&quot;#00AE31&quot;&gt;Success&lt;/vs-button&gt;
&lt;vs-button type=&quot;border&quot; text-color=&quot;#F75454&quot;&gt;Danger&lt;/vs-button&gt;
&lt;vs-button type=&quot;border&quot; text-color=&quot;rgb(255,159,67)&quot;&gt;Warning&lt;/vs-button&gt;
&lt;vs-button type=&quot;border&quot; class=&quot;demo-text-dark&quot; text-color=&quot;rgb(30,30,30)&quot;&gt;Dark&lt;/vs-button&gt;
&lt;vs-button type=&quot;border&quot; text-color=&quot;tomato&quot;&gt;Color&lt;/vs-button&gt;
&lt;vs-button disabled text-color=&quot;rgb(0, 0, 0)&quot;&gt;Disabled&lt;/vs-button&gt;
		</template>

	</vx-card>
</template>