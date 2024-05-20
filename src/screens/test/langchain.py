from langchain.document_loaders import CSVLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Set OpenAI API key
os.environ["OPENAI_API_KEY"] = "YOUR_OPENAI_API_KEY"

# Load documents from CSV
loader = CSVLoader(file_path='/path/to/your/file.csv')

# Create an index using the loaded documents
index_creator = VectorstoreIndexCreator()
docsearch = index_creator.from_loaders([loader])

# Create a question-answering chain using the index
chain = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type="stuff", retriever=docsearch.vectorstore.as_retriever(), input_key="question")

def process_query(query):
    # Pass a query to the chain
    response = chain({"question": query})
    return response['result']

# Example query processing
query = "List the places where someone from Zimbabwe with a budget of $800 - $1500 go to which locationSelected must not be more than 5"
result = process_query(query)
print(result)
