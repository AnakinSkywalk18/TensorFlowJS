from keras.models import load_model

import tensorflowjs as tfjs
import numpy as np

model = load_model('chatbotmodel.h5')

tfjs.converters.save_keras_model(model, 'tfjs_layers_model')