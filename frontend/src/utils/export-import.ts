
// Export/Import utility for Wanderer's Guide
// Handles exporting and importing characters, campaigns, and homebrew content

const ExportImport = {
  // Export character data as JSON
  exportCharacter: (character: any) => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      character: character
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wg-character-${character.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import character data from JSON file
  importCharacter: (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          
          if (!data.version || !data.character) {
            throw new Error('Invalid character export file');
          }

          resolve({ success: true, message: 'Character imported successfully', character: data.character });
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  },

  // Export campaign data as JSON
  exportCampaign: (campaign: any) => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      campaign: campaign
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wg-campaign-${campaign.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import campaign data from JSON file
  importCampaign: (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          
          if (!data.version || !data.campaign) {
            throw new Error('Invalid campaign export file');
          }

          resolve({ success: true, message: 'Campaign imported successfully', campaign: data.campaign });
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  },

  // Export homebrew content as JSON
  exportHomebrew: (homebrew: any) => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      homebrew: homebrew
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wg-homebrew-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import homebrew content from JSON file
  importHomebrew: (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          
          if (!data.version || !data.homebrew) {
            throw new Error('Invalid homebrew export file');
          }

          resolve({ success: true, message: 'Homebrew imported successfully', homebrew: data.homebrew });
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }
};

export default ExportImport;
