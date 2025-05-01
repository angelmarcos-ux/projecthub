import React, { useState } from 'react';
import { Search, Filter, File, FileText, FilePlus, Download, Trash2, MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedBy: string;
  uploadedAt: string;
  projectName: string;
}

const DocumentsPage: React.FC = () => {
  const [documents] = useState<Document[]>([
    {
      id: '1',
      name: 'Project Brief.pdf',
      type: 'pdf',
      size: 2500000,
      uploadedBy: 'John Doe',
      uploadedAt: '2023-06-01T09:00:00Z',
      projectName: 'Website Redesign',
    },
    {
      id: '2',
      name: 'User Flow Diagrams.fig',
      type: 'fig',
      size: 5800000,
      uploadedBy: 'Jane Smith',
      uploadedAt: '2023-06-05T14:30:00Z',
      projectName: 'Website Redesign',
    },
    {
      id: '3',
      name: 'Content Guidelines.docx',
      type: 'docx',
      size: 350000,
      uploadedBy: 'John Doe',
      uploadedAt: '2023-06-08T11:15:00Z',
      projectName: 'Website Redesign',
    },
    {
      id: '4',
      name: 'Technical Specifications.pdf',
      type: 'pdf',
      size: 1800000,
      uploadedBy: 'Sarah Williams',
      uploadedAt: '2023-06-10T16:45:00Z',
      projectName: 'Mobile App Development',
    },
    {
      id: '5',
      name: 'Brand Guidelines.pdf',
      type: 'pdf',
      size: 4200000,
      uploadedBy: 'Jane Smith',
      uploadedAt: '2023-06-12T10:30:00Z',
      projectName: 'Marketing Campaign',
    },
  ]);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) {
      return bytes + ' B';
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + ' KB';
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <File size={16} className="text-error-500" />;
      case 'docx':
        return <FileText size={16} className="text-primary-500" />;
      case 'fig':
        return <File size={16} className="text-secondary-500" />;
      default:
        return <File size={16} className="text-neutral-500" />;
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Documents</h1>
          <p className="text-neutral-500 mt-1">Manage and share project documents</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <FilePlus size={18} className="mr-2" />
            Upload Document
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search documents..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <select className="block px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">All Projects</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Marketing Campaign">Marketing Campaign</option>
        </select>
        <select className="block px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">All File Types</option>
          <option value="pdf">PDF</option>
          <option value="docx">Word</option>
          <option value="fig">Figma</option>
        </select>
        <button className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50">
          <Filter size={18} className="mr-2" />
          Filter
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Uploaded By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {documents.map((document) => (
                <tr key={document.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                        {getFileIcon(document.type)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-neutral-900">{document.name}</div>
                        <div className="text-xs text-neutral-500 uppercase">{document.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {document.projectName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {document.uploadedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {format(new Date(document.uploadedAt), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {formatFileSize(document.size)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-800" title="Download">
                      <Download size={16} />
                    </button>
                    <button className="text-neutral-600 hover:text-neutral-800 ml-3" title="Delete">
                      <Trash2 size={16} />
                    </button>
                    <button className="text-neutral-600 hover:text-neutral-800 ml-3" title="More options">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-5 py-3 border-t border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="text-sm text-neutral-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> documents
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;