// // Add import for MobileModel from PlayTorch SDK
// import {MobileModel, text, torch} from 'react-native-pytorch-core';
// // Import the BERTVocab JSON file, which is used below to decode the model response
// import * as BERT from './BERTVocab.json';

// const tokenizer = new text.WordPieceTokenizer({vocab: BERT.vocab});

// // URL to the image classification model that is used in this example
// const MODEL_URL =
//   'https://github.com/facebookresearch/playtorch/releases/download/v0.1.0/bert_qa.ptl';

// // Variable to hold a reference to the loaded ML model
// let model = null;

// // The answerQuestion function that will synthesize an answer to the question asked from the source text
// export default async function answerQuestion(sourceText, question) {
//   // Load model
//   if (model == null) {
//     const filePath = await MobileModel.download(MODEL_URL);
//     model = await torch.jit._loadForMobile(filePath);
//   }

//   // Pack
//   const inputText = `[CLS] ${question} [SEP] ${sourceText} [SEP]`;
//   const tokens = tokenizer.encode(inputText);

//   // Inference
//   const inputs = torch.tensor([tokens], {dtype: torch.int});
//   const output = await model.forward(inputs);

//   // Unpack
//   const startId = output.start_logits.argmax().item();
//   const endId = output.end_logits.argmax().item();
//   return tokenizer.decode(tokens.slice(startId, endId + 1));
// }