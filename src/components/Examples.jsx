import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleSelect (selectedButton){
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }
    let tabContent = <p>Lütfen bir konu seçiniz.</p>
  
    if(selectedTopic) {
      tabContent = (
        <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
      );
    }
    return(
        <Section title="Örnekler:" id="examples">
          <Tabs 
          ButtonsContainer="menu"
            buttons={
              <>
          <TabButton 
          isSelected={selectedTopic === 'Koşul_ifadeleri'} 
          onClick={() => handleSelect('Koşul_ifadeleri')}
          >
            Koşul ifadeleri
          </TabButton>

          <TabButton 
          isSelected={selectedTopic === 'Döngüler'} 
          onClick={() => handleSelect('Döngüler')}
          >
            Döngüler
          </TabButton>

          <TabButton 
          isSelected={selectedTopic === 'Fonksiyonlar'} 
          onClick={() => handleSelect('Fonksiyonlar')}
          >
            Fonksiyonlar
          </TabButton>

          <TabButton 
          isSelected={selectedTopic === 'OOP'} 
          onClick={() => handleSelect('OOP')}
          >
            OOP
          </TabButton>
              </>
            }
          >
            {tabContent}
            </Tabs>
      </Section>
    );
}