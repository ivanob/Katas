import { FileCommandBusAsync } from '../../../src/Shared/Infraestructure/Bus/FileCommandBusAsync'

describe('Test for FileCommandBusAsync Command bus', () => {
  let fileCommandBus: FileCommandBusAsync;
  let mockAsyncCommand = {serialize: jest.fn()}

  beforeEach(async () => {
    fileCommandBus = new FileCommandBusAsync('test.txt')
    mockAsyncCommand.serialize.mockResolvedValue('a;b;60')
  });

  it('Should append correctly one line in a new file', () => {
    //Arrange
    //Act
    fileCommandBus.dispatch(mockAsyncCommand)
    //Assert
    
  });
});
