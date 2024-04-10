require 'logger'

module Jekyll
  class PostRenderHook < Jekyll::Hooks::Pages
    def self.post_render(page)
      begin
        # Initialize a logger
        logger = Logger.new('plugin.log')

        # Check if the page is an HTML file
        if page.output_ext == ".html"
          # Access the rendered HTML content
          html_content = page.output

          # Modify the HTML content as needed
          modified_html = modify_html(html_content)

          if modified_html
            # Update the page's output with the modified HTML
            page.output = modified_html
            # Log a message
            logger.info("HTML modified for #{page.url}")
          else
            # Log a message if modification failed
            logger.warn("Failed to modify HTML for #{page.url}")
          end
        end
      rescue StandardError => e
        # Log any errors to the console for debugging
        puts "Error during post-render hook: #{e.message}"
      end
    end

    def self.modify_html(html)
      # Example modification: add a <div> at the end of the body
      modified_html = html.sub('</body>', '<div>Modified HTML content</div></body>')
      return modified_html
    end
  end
end

puts "My plugin file is being loaded!"
