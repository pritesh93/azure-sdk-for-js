let nock = require('nock');

module.exports.testInfo = {"container":"container157135007166703757"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container157135007166703757')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'ETag',
  '"0x8D7534E741DBC3F"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '73a93d46-501e-00d0-3137-85c55b000000',
  'x-ms-client-request-id',
  '71c819a0-06d3-4aac-91fd-31d388f82b32',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container157135007166703757/blob0', "Hello World")
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'ETag',
  '"0x8D7534E74247FF1"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5c01dd50-001e-00cd-6137-85c8e7000000',
  'x-ms-client-request-id',
  '6ca9143c-f60f-4222-9f92-d3d22fab60b0',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  'YeJLfssylmU=',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 17 Oct 2019 22:07:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container157135007166703757/blob1', "Hello World")
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'ETag',
  '"0x8D7534E742BAD2A"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a794a574-b01e-002c-2837-8514a2000000',
  'x-ms-client-request-id',
  'c04b1947-85f6-4a00-9305-d1340f5e5c79',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  'YeJLfssylmU=',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container157135007166703757/%C3%A5%20%C3%A4%20%C3%B6', "Hello World")
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'ETag',
  '"0x8D7534E74348861"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2e5b9e12-b01e-00d8-7d37-85df54000000',
  'x-ms-client-request-id',
  '0a3c5de0-ce44-432c-856b-5bcafa0cd4b2',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  'YeJLfssylmU=',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .post('/', "--batch_800eff24-1101-4863-9df1-3ae3e78da4c5\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\nContent-ID: 0\r\n\r\nPUT /container157135007166703757/blob0?comp=tier HTTP/1.1\r\nx-ms-access-tier: Cool\r\nx-ms-date: Thu, 17 Oct 2019 22:07:51 GMT\r\nAuthorization: SharedKey fakestorageaccount:JduYLUQSrfG9icq2l3NbRGe2UVhpOawfVCk2FxegHig=\r\n\r\n--batch_800eff24-1101-4863-9df1-3ae3e78da4c5\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\nContent-ID: 1\r\n\r\nPUT /container157135007166703757/blob1?comp=tier HTTP/1.1\r\nx-ms-access-tier: Cool\r\nx-ms-date: Thu, 17 Oct 2019 22:07:51 GMT\r\nAuthorization: SharedKey fakestorageaccount:h9lD8UTmYM3KFud7jUdLE282N4UshznlhV9dzNDaOyU=\r\n\r\n--batch_800eff24-1101-4863-9df1-3ae3e78da4c5\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\nContent-ID: 2\r\n\r\nPUT /container157135007166703757/%C3%A5%20%C3%A4%20%C3%B6?comp=tier HTTP/1.1\r\nx-ms-access-tier: Cool\r\nx-ms-date: Thu, 17 Oct 2019 22:07:51 GMT\r\nAuthorization: SharedKey fakestorageaccount:CvRjDFwHT7nHr5nN7sxjPdoPXK9X22yLLP0ZOQHyygs=\r\n\r\n--batch_800eff24-1101-4863-9df1-3ae3e78da4c5--\r\n")
  .query(true)
  .reply(202, "--batchresponse_d1a69b61-2d1d-49f2-8d65-b2d9ca086d72\r\nContent-Type: application/http\r\nContent-ID: 0\r\n\r\nHTTP/1.1 200 OK\r\nx-ms-request-id: 87c4bd84-b01e-0061-2437-85db4e1eaa81\r\nx-ms-version: 2019-02-02\r\nServer: Windows-Azure-Blob/1.0\r\n\r\n--batchresponse_d1a69b61-2d1d-49f2-8d65-b2d9ca086d72\r\nContent-Type: application/http\r\nContent-ID: 1\r\n\r\nHTTP/1.1 200 OK\r\nx-ms-request-id: 87c4bd84-b01e-0061-2437-85db4e1eaa86\r\nx-ms-version: 2019-02-02\r\nServer: Windows-Azure-Blob/1.0\r\n\r\n--batchresponse_d1a69b61-2d1d-49f2-8d65-b2d9ca086d72\r\nContent-Type: application/http\r\nContent-ID: 2\r\n\r\nHTTP/1.1 200 OK\r\nx-ms-request-id: 87c4bd84-b01e-0061-2437-85db4e1eaa87\r\nx-ms-version: 2019-02-02\r\nServer: Windows-Azure-Blob/1.0\r\n\r\n--batchresponse_d1a69b61-2d1d-49f2-8d65-b2d9ca086d72--", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'multipart/mixed; boundary=batchresponse_d1a69b61-2d1d-49f2-8d65-b2d9ca086d72',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '87c4bd84-b01e-0061-2437-85db4e000000',
  'x-ms-version',
  '2019-02-02',
  'x-ms-client-request-id',
  '94406769-e058-4753-bc36-f155391ac993',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container157135007166703757/blob0')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7534E74247FF1"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd63e9e46-b01e-00aa-0c37-85d81b000000',
  'x-ms-client-request-id',
  'ff6a9376-f06b-4e8e-a91e-a0ffe8e2c414',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-change-time',
  'Thu, 17 Oct 2019 22:07:52 GMT',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-change-time,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container157135007166703757/blob1')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7534E742BAD2A"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4d01e8c4-201e-005c-0437-85ad55000000',
  'x-ms-client-request-id',
  '4ca08b75-5f47-475e-8e64-3ade2a853076',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-change-time',
  'Thu, 17 Oct 2019 22:07:52 GMT',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-change-time,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 17 Oct 2019 22:07:52 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container157135007166703757/%C3%A5%20%C3%A4%20%C3%B6')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7534E74348861"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '73a93e81-501e-00d0-2f37-85c55b000000',
  'x-ms-client-request-id',
  '13f09def-6626-418b-9d3e-7d2be115d4bc',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-creation-time',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-change-time',
  'Thu, 17 Oct 2019 22:07:52 GMT',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,Content-Type,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-change-time,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container157135007166703757')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8cdc2eb3-601e-005d-3237-85f289000000',
  'x-ms-client-request-id',
  '6fde0f56-56db-46ca-bb46-5b5b1413abed',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 17 Oct 2019 22:07:51 GMT',
  'Connection',
  'close' ]);

