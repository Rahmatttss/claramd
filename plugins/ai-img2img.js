const axios = require("axios");

const payloads = {
	prompt: "1girl, ", 
	init_image: url,
	width: 512, 
	height: 768, 
	steps: 30, 
	model_id: "dream_shaper", 
	sampler: "DPMS++", 
	seed: null,
	cfg: 7, 
	image_num: 1, 
	negative_prompt: "nsfw", 
	safety_checker: "no", 
	enhance_prompt: "no",
	multi_lingual: "no", 
	panorama: "no", 
	lora_model: null, 
	hiresFix: "yes", 
	lora_strength: 0.5, 
	webhook: null, 
};
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion/img2img",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data; 

if (!status) {
	return m.reply(message);
}
const { result } = data;
console.log(result);